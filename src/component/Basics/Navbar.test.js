import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    const menuListProp = ['All', 'Breakfast', 'Lunch', 'Dinner']; // Example menu items
    const filterItem = jest.fn(); // Mock filterItem function

    const wrapper = shallow(<Navbar filterItem={filterItem} menuListProp={menuListProp} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders buttons for menu items', () => {
    const menuListProp = ['All', 'Breakfast', 'Lunch', 'Dinner']; // Example menu items
    const filterItem = jest.fn(); // Mock filterItem function

    const wrapper = shallow(<Navbar filterItem={filterItem} menuListProp={menuListProp} />);
    
    // Check if the correct number of buttons are rendered
    expect(wrapper.find('button.btn-group__item')).toHaveLength(menuListProp.length);

    // Check if buttons have the expected text and call the filterItem function when clicked
    menuListProp.forEach((menuItem, index) => {
      const button = wrapper.find('button.btn-group__item').at(index);
      expect(button.text()).toBe(menuItem);
      button.simulate('click');
      expect(filterItem).toHaveBeenCalledWith(menuItem);
    });
  });
});
