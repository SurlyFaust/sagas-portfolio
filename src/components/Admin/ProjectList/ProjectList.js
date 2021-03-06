import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import { connect } from 'react-redux';

class ProjectList extends Component {

componentDidMount() {
    this.getProjectList();
};

getProjectList = () => {
    console.log('ProjectList GET request triggered');
    this.props.dispatch({ type: 'FETCH_PROJECT_LIST'});
};

    render() {
      return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.projects.map(project => 
                        <ProjectItem project={project} key={project.id}/>
                    )} 
                </tbody>
            </table> 
        </div>
      )
    }
  }

  const mapStateToProps = reduxState => ({
      reduxState
  });

  export default connect(mapStateToProps)(ProjectList)