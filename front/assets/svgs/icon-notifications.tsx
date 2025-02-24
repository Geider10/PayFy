import { scaleHeight, scaleWidth } from '@/constants/Scale'
import Svg, { Rect, Mask, G, Path, SvgProps } from 'react-native-svg'
export type IconFullSvgProps = SvgProps & {
	size?: number
}

const IconNotifications = ({
	size = 125,
	color,
	...rest
}: IconFullSvgProps) => (
	<Svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		// xmlns='http://www.w3.org/2000/svg'
	>
		<Mask
			id='mask0_401_1390'
			// style='mask-type:alpha'
			maskUnits='userSpaceOnUse'
			x='0'
			y='0'
			width='32'
			height='32'
		>
			<Rect width='32' height='32' fill='#D9D9D9' />
		</Mask>
		<G mask='url(#mask0_401_1390)'>
			<Path
				d='M5.3335 25.3334V22.6667H8.00016V13.3334C8.00016 11.489 8.55572 9.85008 9.66683 8.41675C10.7779 6.98341 12.2224 6.04453 14.0002 5.60008V4.66675C14.0002 4.11119 14.1946 3.63897 14.5835 3.25008C14.9724 2.86119 15.4446 2.66675 16.0002 2.66675C16.5557 2.66675 17.0279 2.86119 17.4168 3.25008C17.8057 3.63897 18.0002 4.11119 18.0002 4.66675V5.60008C19.7779 6.04453 21.2224 6.98341 22.3335 8.41675C23.4446 9.85008 24.0002 11.489 24.0002 13.3334V22.6667H26.6668V25.3334H5.3335ZM16.0002 29.3334C15.2668 29.3334 14.6391 29.0723 14.1168 28.5501C13.5946 28.0279 13.3335 27.4001 13.3335 26.6667H18.6668C18.6668 27.4001 18.4057 28.0279 17.8835 28.5501C17.3613 29.0723 16.7335 29.3334 16.0002 29.3334ZM10.6668 22.6667H21.3335V13.3334C21.3335 11.8667 20.8113 10.6112 19.7668 9.56675C18.7224 8.5223 17.4668 8.00008 16.0002 8.00008C14.5335 8.00008 13.2779 8.5223 12.2335 9.56675C11.1891 10.6112 10.6668 11.8667 10.6668 13.3334V22.6667Z'
				fill={color}
			/>
		</G>
	</Svg>
)
export default IconNotifications
