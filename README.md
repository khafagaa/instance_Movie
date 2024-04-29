# Question: How would you optimize image loading and caching in the React Native Movie App to ensure efficient resource utilization and improved performance?

# Answer =>

1. for icons => if you are using custom icon so the better way use SVG by convert the icon to svg by using icomoon or any websits, if not custom u can use third    party like vector icon
2. for caching images from apis => we can use react query for caching the apis data, or using the middleware RTK of redux (i used this), or using third party libaray like "react-native-cached-image"
3. for lazy loading and performace => we can use third party like "react-native-fast-image" or "rn-progressive-image" ( using both ) for lazy loading and fast rendering.
4. for Optimizing Image Sizes => we can use use third party like "react-native-image-resizer" to resize images


# project Demo => https://drive.google.com/file/d/1ENb9c-epkVhh33Ymp4AnKFLbcSmd-MKr/view?usp=sharing
