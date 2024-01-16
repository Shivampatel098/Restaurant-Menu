import React from 'react';
import { shallow } from 'enzyme';
import MenuCard from './MenuCard';

describe('MenuCard Component', () => {
  it('renders without crashing', () => {
    const menuDataProp = [
      {
        id: 1,
        image: 'image-url-1',
        name: 'Item 1',
        category: 'Category A',
        description: 'Description for Item 1',
      },
      {
        id: 2,
        image: 'image-url-2',
        name: 'Item 2',
        category: 'Category B',
        description: 'Description for Item 2',
      },
    ];

    const wrapper = shallow(<MenuCard menuDataProp={menuDataProp} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders menu items correctly', () => {
    const menuDataProp = [
      {
        id: 1,
        image: 'image-url-1',
        name: 'Item 1',
        category: 'Category A',
        description: 'Description for Item 1',
      },
      {
        id: 2,
        image: 'image-url-2',
        name: 'Item 2',
        category: 'Category B',
        description: 'Description for Item 2',
      },
    ];

    const wrapper = shallow(<MenuCard menuDataProp={menuDataProp} />);

    // Check if the correct number of menu items are rendered
    expect(wrapper.find('.card-container')).toHaveLength(menuDataProp.length);

    // Check if menu items have the expected content
    menuDataProp.forEach((menuItem, index) => {
      const card = wrapper.find('.card-container').at(index);
      expect(card.find('.card-title').text()).toBe(menuItem.name);
      expect(card.find('.card-author').text()).toBe(menuItem.category);
      expect(card.find('.card-description').text()).toBe(menuItem.description);
      // Add more assertions as needed for other fields like id, image, etc.
    });
  });
});
