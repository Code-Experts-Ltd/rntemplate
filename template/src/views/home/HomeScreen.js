import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Style from '../../style/Style';
import Color from '../../style/Color';

export default HomeScreen = ({}) => {
    const [movies, setMovies] = useState([
        { id: '1', title: 'Movie 1', image: '' },
        { id: '2', title: 'Movie 2', image: '' },
        { id: '3', title: 'Movie 3', image: '' },
        { id: '4', title: 'Movie 4', image: '' },
        { id: '5', title: 'Movie 5', image: '' },
    ]);

    return (
        <View style={Style.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{
                                uri: `https://picsum.photos/id/${item.id}/200/300`,
                            }}
                            style={{ width: '100%', height: 300 }}
                        />
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
