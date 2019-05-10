import React from 'react';
import {connect} from 'react-redux';
import {fetchYouTubeVideos} from '../../actions/actions';


class Videos extends React.Component {

  componentDidMount() {
    fetchYouTubeVideos(this.props.selectedRecipeName);
  }

  render() {
    if(!this.props.videos) {
      return <div></div>;
    }

    return (
      <div>
      {this.props.videos.map((video) => {
        return (
          <div className="video-item">
            <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/watch?v=${this.props.video.id.videoId}`}>
              <img 
                src={this.props.video.snippet.thumbnails.medium.url} 
                alt={this.props.video.snippet.title} 
                key={this.props.video.id.videoId}
              />
            </a>
          </div>
        );
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedRecipeName: state.ui.selectedRecipeName,
    videos: state.ui.videos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {fetchYouTubeVideos: dispatch(fetchYouTubeVideos)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);