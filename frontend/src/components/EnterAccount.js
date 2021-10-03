import { useParams } from "react-router";

export default function EnterAccount() {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    )
}