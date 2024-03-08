import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";


const CardView = ({
  title,
  imagesc,
  tenKSText,
  titleTGMC,
  ddText,
}) => {
  return (


    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        Lịch Trình
      </Text>
      <View style={styles.khoi1}>
        <Text>Địa điểm
          {'\n'}
          <Text style={styles.title}>{title}</Text>
          {'\n'}
          {'\n'}
          Hình ảnh
        </Text>
        <View style={[{ alignItems: 'center', justifyContent: 'center', padding: 12 }]}>
          <Image source={{ uri: imagesc }} style={{ height: 120, width: 300, borderRadius: 25 }} />
        </View>
      </View>

      {tenKSText
        ?
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            Khách Sạn
          </Text>

          <View style={styles.khoi1}>
            <Text>Tên khách sạn
              {'\n'}
              <Text style={styles.title}>{tenKSText}</Text>
              {'\n'}
              {'\n'}
              Thời gian mở cửa
              {'\n'}
              <Text style={styles.title}>{titleTGMC}</Text>
              {'\n'}
              {'\n'}
              Địa điểm
              {'\n'}
              <Text style={styles.title}>{ddText}</Text>
            </Text>

          </View>
        </View>
        : <View />}
    </View>
  );
};


const Bai2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CardView
          title="Quan Hoa, Hà Nội"
          phuongTien="Phương tiện di chuyển"
          imagesc="https://i.pinimg.com/564x/12/d3/d8/12d3d8e1b90f9db4ec65f6a4a08f4427.jpg"
          tenKSText="Hồng Quỳnh"
          titleTGMC="09:00 AM - 12:00 AM"
          ddText="234 Quang Trung, Hồ Chí Minh"
        />
      </View>
    </ScrollView>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginTop: 20
  },

  khoi1: {
    height: "auto",
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 14,
    shadowOpacity: 0.9,
    elevation: 13
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',

  },

});
