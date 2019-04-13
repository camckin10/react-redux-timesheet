import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';
import { isMainThread } from 'worker_threads';

describe('<ProjectRow />', () => {
  //setting up components that we will be testing
  let wrapper ;

  //beforeEach() is an enzyme function
  beforeEach(() => {
    const project = {
      name: 'NAME',
      description: 'DESCRIPTION'
    };
    wrapper = shallow(<ProjectRow project={project}/>);
});

//adding tests
it('should instantiate the Project Row Component', () =>{
  expect(wrapper).toHaveLength(1);
});

it('should render values into expected cells', () =>{
  expect(wrapper.find('td').toHaveLength(2));
  expect(wrapper.find('td').at(0).text()).toEqual('NAME');
  expect(wrapper.find('td').at(1).text()).toEqual('DESCRIPTION');
  });
});
