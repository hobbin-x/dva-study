import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

const Count =  ({count, dispatch}) => {
  return (
    <div>
      {count}
      <Button onClick={() => dispatch({type: 'count/add'})}>
        Add
      </Button>
      <Button onClick={() => dispatch({type: 'count/minus'})}>
        Minus
      </Button>
    </div>
  )
};

export default connect(({count}) => ({
  count
}))(Count);

