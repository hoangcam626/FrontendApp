import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {getPlacesActions, searchPlaceActions} from "../../../services/place/actions";
import {useDispatch} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import useTheme from "../../../hooks/useTheme";
import st from "./styles"
import PlaceShortSelf from "../shortself";

const SearchPlaceModal = ({visible, onClose, onSelectPlace}) => {
    const theme = useTheme();
    const styles = st()
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch<any>()
    const searchPlaces = async () => {
        setLoading(true)
        const req = new FormData()
        req.append('keyword', keyword)
        await dispatch(searchPlaceActions(req))
            .then(res => {
                setSearchResults(res?.payload)
                setLoading(false)
            })
            .catch(err => setLoading(false))

    };
    useEffect(() => {
        if (keyword) {
            searchPlaces()
        }
    }, [keyword]);

    const selectPlace = (place) => {
        onSelectPlace(place);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            style={styles.modalContent}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    value={keyword}
                    onChangeText={setKeyword}
                    placeholder="Nhập địa điểm tìm kiếm..."
                    onSubmitEditing={() => searchPlaces()}
                />
                <TouchableOpacity onPress={() => searchPlaces()}>
                    <Icon size={24} style={styles.searchButton} name="search"/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{padding: 10}} onPress={() => selectPlace(item)}>
                        <PlaceShortSelf place={item}></PlaceShortSelf>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>Đóng</Text>
            </TouchableOpacity>
        </Modal>
    );
};

export default SearchPlaceModal;
