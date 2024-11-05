import { useCurrentApp } from "@/context/app.context";
import { getURLBaseBackend, currencyFormatter } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

interface IProps {
    menuItem: IMenuItem;
    restaurant: IRestaurant | null
    isModal: boolean
}

const ItemQuantity = (props: IProps) => {
    const { menuItem, restaurant, isModal } = props;
    const { cart, setCart } = useCurrentApp();

    const handlePressItem = (item: IMenuItem, action: "MINUS" | "PLUS") => {
        if (item.options.length && isModal === false) {
            router.navigate("/product/create.modal")
        } else {
            if (restaurant?._id) {
                const total = action === "MINUS" ? -1 : 1
                if (!cart[restaurant?._id]) {
                    //cart not exist => init cart
                    cart[restaurant._id] = {
                        sum: 0,
                        quantity: 0,
                        items: {}
                    }
                }

                //process product
                cart[restaurant._id].sum = cart[restaurant._id].sum + total * item.basePrice
                cart[restaurant._id].quantity = cart[restaurant._id].quantity + total

                //check if the product has been added
                if (!cart[restaurant._id].items[item._id]) {
                    cart[restaurant._id].items[item._id] = {
                        quantity: 0,
                        data: menuItem
                    }
                }

                const currentQuantity = cart[restaurant._id].items[item._id].quantity + total
                cart[restaurant._id].items[item._id] = {
                    data: menuItem,
                    quantity: currentQuantity,
                }
                if (currentQuantity <= 0) {
                    delete cart[restaurant._id].items[item._id]
                }

                setCart((prevState: any) => ({ ...prevState, cart }))//merge state
            }
        }
    }

    let showMinus = false;
    let quantity = 0;
    if (restaurant?._id) {
        const store = cart[restaurant?._id!];
        if (store?.items && store?.items[menuItem?._id]) {
            showMinus = true;
            quantity = store?.items[menuItem?._id].quantity;
        }
    }


    return (
        <View style={{
            backgroundColor: "white",
            gap: 10, flexDirection: "row", padding: 10
        }}>
            <View>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={{ uri: `${getURLBaseBackend()}/images/menu-item/${menuItem?.image}` }} />
            </View>
            <View style={{ flex: 1, gap: 10 }}>
                <View><Text>{menuItem.title}</Text></View>
                <View><Text>{menuItem.description}</Text></View>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text
                        style={{ color: APP_COLOR.BLUE }}
                    >
                        {currencyFormatter(menuItem.basePrice)}
                    </Text>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            gap: 3
                        }} >
                        {showMinus &&
                            <>
                                <Pressable
                                    style={({ pressed }) => ({
                                        opacity: pressed === true ? 0.5 : 1,
                                        alignSelf: "flex-start", //fit-content
                                    })}
                                    onPress={() => handlePressItem(menuItem, "MINUS")}
                                >
                                    <AntDesign name="minussquareo"
                                        size={24} color={APP_COLOR.BLUE}
                                    />
                                </Pressable>
                                <Text style={{
                                    minWidth: 25,
                                    textAlign: "center"
                                }}>
                                    {quantity}
                                </Text>
                            </>
                        }

                        <Pressable
                            style={
                                ({ pressed }) => ({
                                    opacity: pressed === true ? 0.5 : 1,
                                    alignSelf: "flex-start"
                                })
                            }
                            onPress={() => handlePressItem(menuItem, "PLUS")}
                        >
                            <AntDesign
                                name="plussquare"
                                size={24}
                                color={APP_COLOR.BLUE} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemQuantity