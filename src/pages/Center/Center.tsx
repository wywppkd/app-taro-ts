import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getAuthCode, getCurrentPageUrl } from '../../utils'

const Center: Taro.FC = () => {
  useEffect(() => {
    const initCenter = async () => {
      const res = await getAuthCode()
      console.log("initCenter -> res", res)
      console.log("initCenter -> getCurrentPageUrl()", getCurrentPageUrl())
    }
    initCenter()
  }, [])

  return (
    <View>
      Center
    </View>
  );
}

export default Center;
