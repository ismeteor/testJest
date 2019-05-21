let React = require('react');
const Link = React.Link;
let renderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});