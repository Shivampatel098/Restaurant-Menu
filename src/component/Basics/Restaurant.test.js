import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from './Restaurant';
describe('Restaurant Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays a Navbar component', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.find('Navbar')).toHaveLength(1);
  });

  it('displays a MenuCard component', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.find('MenuCard')).toHaveLength(1);
  });

//   it('updates menuData when filterItem is called', () => {
//     const wrapper = shallow(<Restaurant />);
    

//     const mockData = [
//       {  category: 'Category A', price: '25' },
//       { category: 'Category B', price: '50' },
//     ];

//     // Mock the useState hook for menuData
//     jest.spyOn(React, 'useState').mockReturnValue([mockData, jest.fn()]);

//     // Call the filterItem function
//     const filterItem = wrapper.find('Navbar').prop('filterItem');
//     filterItem('Category A');

//     // Verify that the filterItem function correctly updates the state
//     const updatedData = wrapper.find('MenuCard').prop('menuDataProp');
//     expect(updatedData).toEqual([{ category: 'Category A', price: '25' }]);
//   });
  

//   it('resets menuData when "All" is selected', () =>
// {
//     const wrapper = shallow(<Restaurant />);
//     const mockSetMenuData = jest.fn();

//     // Mock the useState hook for menuData
//     jest.spyOn(React, 'useState').mockReturnValue([{ name: 'Item 1', category: 'Category A' }, mockSetMenuData]);

//     // Call the filterItem function with 'All'
//     wrapper.find('Navbar').prop('filterItem')('All');

//     // Verify that the filterItem function correctly resets the state
//     expect(mockSetMenuData).toHaveBeenCalledWith([
//       { name: 'Item 1', category: 'Category A' },
//     ]);
//   }
//   );
});
