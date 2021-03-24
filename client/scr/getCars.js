import React from 'react';
import ReactDOM from 'react-dom';
import {getEmployees} from './testCase.js';

const list = getEmployees();

    ReactDOM.render(
        list,
        document.getElementById('root')
      );
      
      export default this;
//export default PostPage;