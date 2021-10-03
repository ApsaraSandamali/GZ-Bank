import { useParams } from "react-router";

export default function EditStudent() {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

