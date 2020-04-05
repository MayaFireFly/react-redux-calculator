import {connect} from 'react-redux';
import Display from './Display';

const mapStateToProps = (state) => {
  return {
    data:state
  };
};

export default connect(mapStateToProps, null)(Display);