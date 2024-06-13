import BrandTiitle from "../titles/BrandTiitle"
import ColoredTittle from "../titles/ColoredTittle"

const TopSection = ({ brandTitle, primary, secondary, text, className }) => {
   return (
      <div className="py-12 text-center">
         <BrandTiitle>{brandTitle}</BrandTiitle>
         <ColoredTittle primary={primary} secondary={secondary} />
         <p className={`w-full mx-auto lg:text-md md:text-xs text-xxs ${className}`}>
            {text}
         </p>
      </div>
   )
}

export default TopSection