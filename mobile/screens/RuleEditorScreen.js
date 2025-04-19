import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Polygon, Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');
const size = width * 0.8;
const half = size / 2;
const offset = 20;          // padding from SVG edge
const squareSize = 16;      // length of each base square’s side

// Diamond corners: home (top), first (right), second (bottom), third (left)
const diamondPoints = [
  `${half},${offset}`,
  `${size - offset},${half}`,
  `${half},${size - offset}`,
  `${offset},${half}`,
].join(' ');

// Base centers
const bases = [
  { x: half, y: offset },           
  { x: size - offset, y: half },   
  { x: half, y: size - offset },  
  { x: offset, y: half },          
];

export default function RuleEditorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rule Editor</Text>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Diamond outline */}
        <Polygon
          points={diamondPoints}
          fill="none"
          stroke="black"
          strokeWidth={2}
        />
        {/* Base squares */}
        {bases.map((pt, i) => (
          <Rect
            key={i}
            x={pt.x - squareSize / 2}
            y={pt.y - squareSize / 2}
            width={squareSize}
            height={squareSize}
            fill="white"
            stroke="black"
            strokeWidth={2}
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  svg: {
    backgroundColor: '#f9f9f9',
  },
});
