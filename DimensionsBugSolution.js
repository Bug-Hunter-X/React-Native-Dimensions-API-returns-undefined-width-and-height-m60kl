import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  if (!dimensions.width || !dimensions.height) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View style={{ width: dimensions.width, height: dimensions.height, backgroundColor: 'skyblue' }}>
      <Text>Width: {dimensions.width}, Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;