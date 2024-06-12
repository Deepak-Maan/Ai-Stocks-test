import investMan from "../../assets/images/investedMan.png"
import investWoman from "../../assets/images/investedWoman.png"
import nonLeverageGraph from "../../assets/images/nonLeverageGraph.png"
import leverageGraph from "../../assets/images/leverageGraph.png"
export const StasticsData = [
    {
        number: "01",
        para: "Places left to register",
    },
    {
        number: "135",
        para: "Average Registrations per day",
    },
    {
        number: "5X",
        para: "The Average Earnings Increase",
    },
];
export const InvestCards = [
    {
        Img: investMan,
        title: "$250 without leverage, so his buying power was $250, and John achieved returns of $40.",
        name: "John invested "
    },
    {
        Img: investWoman,
        title: "Mike the same amount but utilized leverage of 1 to 30, giving him a buying power of $7,500. With this leverage, Mike achieved returns of $1,200, showcasing the significant impact of leveraging on potential gains.",
        name: "Mike invested "
    },
]
export const AccountData = [
    {
        title: "Non-Leveraged Accounts",
        personInvested: "John invested",
        personInvestment: "$250",
        leverage: "Leverage",
        leverageAmount: "0",
        buyingPower: "Buying Power",
        buyingPowerValue: "$250",
        img: nonLeverageGraph,
        earningReturn: "Potential Earnings",
        earningValue: "$40"
    },
    {
        title: "Leveraged Accounts",
        personInvested: "John invested",
        personInvestment: "$250",
        leverage: "Leverage",
        leverageAmount: "30x",
        buyingPower: "Buying Power",
        buyingPowerValue: "$7,500",
        img: leverageGraph,
        earningReturn: "Potential Earnings",
        earningValue: "$1,200"
    },
]