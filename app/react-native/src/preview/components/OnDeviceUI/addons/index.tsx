import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { addons } from '@storybook/addons';
import AddonsList from './list';
import AddonWrapper from './wrapper';
import style from '../style';

export default class Addons extends PureComponent<{}, { addonSelected: string }> {
  panels = addons.getElements('panel');

  constructor(props: {}) {
    super(props);

    this.state = {
      addonSelected: Object.keys(this.panels)[0] || null,
    };
  }

  onPressAddon = (addonSelected: string) => {
    this.setState({ addonSelected });
  };

  render() {
    const { addonSelected } = this.state;

    if (Object.keys(this.panels).length === 0) {
      return (
        <View style={[style.flex, style.center]}>
          <Text style={style.text}>No addons loaded.</Text>
        </View>
      );
    }

    return (
      <View style={style.flex}>
        <AddonsList
          onPressAddon={this.onPressAddon}
          panels={this.panels}
          addonSelected={addonSelected}
        />
        <AddonWrapper addonSelected={addonSelected} panels={this.panels} />
      </View>
    );
  }
}
