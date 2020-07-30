import React from 'react';
import { render } from 'react-native-testing-library';
import Header from './index.';
import { View } from 'react-native';

describe('Header Component', () => {
  it('should renderer correctly', () => {
    const header = render(<Header />).toJSON();

    expect(header).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "alignItems": "center",
            "backgroundColor": "#DB8F17",
            "flex": 1,
            "flexDirection": "row",
            "height": 75,
            "justifyContent": "space-between",
          }
        }
      >
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexGrow": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
      </View>
    `);
  });

  it('should renderer using children props', () => {
    const header = render(
      <Header>
        <View />
      </Header>,
    ).toJSON();

    expect(header).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "alignItems": "center",
            "backgroundColor": "#DB8F17",
            "flex": 1,
            "flexDirection": "row",
            "height": 75,
            "justifyContent": "space-between",
          }
        }
      >
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexGrow": 1,
            }
          }
        >
          <View />
        </View>
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
      </View>
    `);
  });

  it('should renderer using left props', () => {
    const header = render(<Header left={<View />} />).toJSON();

    expect(header).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "alignItems": "center",
            "backgroundColor": "#DB8F17",
            "flex": 1,
            "flexDirection": "row",
            "height": 75,
            "justifyContent": "space-between",
          }
        }
      >
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        >
          <View />
        </View>
        <View
          style={
            Object {
              "flexGrow": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
      </View>
    `);
  });

  it('should renderer using right props', () => {
    const header = render(<Header right={<View />} />).toJSON();

    expect(header).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "alignItems": "center",
            "backgroundColor": "#DB8F17",
            "flex": 1,
            "flexDirection": "row",
            "height": 75,
            "justifyContent": "space-between",
          }
        }
      >
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexGrow": 1,
            }
          }
        />
        <View
          style={
            Object {
              "flexShrink": 1,
            }
          }
        >
          <View />
        </View>
      </View>
    `);
  });
});
