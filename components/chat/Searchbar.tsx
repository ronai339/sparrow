import { Search} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Searchbar(){
  return (
    <form className="flex items-center gap-2 p-4 border-b">

    <Input
        placeholder="Search..."
    />

    <Button type="submit">
        <Search />
    </Button>
    </form>
  )
}