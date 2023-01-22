import React, { useEffect } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useReState } from "@raulpesilva/re-state"

export default function Settings() {
  const [rsbgc, setRsbgc] = useReState("rsbgc", "#fff")

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("bgc", rsbgc)
    } catch (err) {
      alert(err)
    }
  }

  const loadData = async () => {
    try {
      let data = await AsyncStorage.getItem("bgc")
      if (data !== null) {
        setRsbgc(data)
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: rsbgc }]}>
      <Text style={{ fontSize: 18, padding: 10 }}>
        Choose a background color
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRsbgc("#ff7777")
          }}
        >
          <Text>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRsbgc("#7777ff")
          }}
        >
          <Text>Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRsbgc("#fff")
          }}
        >
          <Text>White</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            storeData()
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 30,
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  row: {
    flexDirection: "row",
  },
})
