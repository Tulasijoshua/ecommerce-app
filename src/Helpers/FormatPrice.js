
const FormatPrice = ({price}) => {
  return Intl.NumberFormat("ak-GH", {
    style:"currency",
    currency:"GHS",
    maximumFractionDigits: 2,
  }).format(price / 1000);
}

export default FormatPrice