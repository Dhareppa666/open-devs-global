import { Fragment } from "react"
import Checkbox from "@material-ui/core/Checkbox";
import { Stack} from "@mui/material";

export const goals = [1,2,3,4]

const HomePage = () => {
    return (
      <div style={{align:'center'}}>
        <div style={{ paddingTop: "80px" }}>
          <h1>My Goals</h1>
        </div>
        <div>
          <Stack direction="row" spacing={2}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            <h2>Goal 1</h2>
          </Stack>
        </div>
        <div>
          <h3>Details</h3>
        </div>
      </div>
    );
}

export default HomePage;