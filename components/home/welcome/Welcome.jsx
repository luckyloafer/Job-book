import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>hello</Text>  
        <Text style={styles.welcomeMessage}>Find Your Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={()=>{}}
            placeholder='Looking for'

          />
          </View>
         <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
             <Text>Button</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
         <FlatList
          data={jobTypes} 
            renderItem={({item})=>(
              <TouchableOpacity 
                style={styles.tab(activeJobType, item)}
                onPress={()=>{
                  setActiveJobType(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap:SIZES.small}}
            horizontal
          />
      </View>
    </View>
  )
}

export default Welcome