import React from 'react';
import {connect} from 'react-redux';
import {fetchYouTubeVideos} from '../../actions/actions';


class Videos extends React.Component {

  render() {
    if(!this.props.videos) {
      return <div></div>;
    }

    return (
      <div>
      {this.props.videos.map((video, i) => {
        return (
          <div className="video-item" key={i}>
            <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/watch?v=${video.id.videoId}`}>
              <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
                key={video.id.videoId}
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

// const mapDispatchToProps = (dispatch) => {
//   return {fetchYouTubeVideos: dispatch(fetchYouTubeVideos)}
// };

export default connect(
  mapStateToProps,
  {fetchYouTubeVideos}
)(Videos);