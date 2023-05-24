export interface IFridgeProps {
    params: {
        id: number
    }
}

const Fridge: React.FC<IFridgeProps> = ({ params: { id } }: IFridgeProps) => {
    return (
        <div className="wrapper">
            This Fridge id: {id}
        </div>
    )
}

export default Fridge;