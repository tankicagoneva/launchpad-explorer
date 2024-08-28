import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import LaunchpadsDropDownMenu from './LaunchpadsDropDownMenu';


test('renders the dropdown menu', () => {
    const exampleProps = {
        image: 'test-image.jpg',
        status: 'Test Status',
        handleClick: jest.fn(),
        viewImageFunction: jest.fn(),
        readMoreLink: 'https://example.com',
      };

    
    const { getByTestId } = render(<LaunchpadsDropDownMenu {...exampleProps}/>);
    const button = getByTestId('actions');
    expect(button).toHaveBeenCalled();
});

