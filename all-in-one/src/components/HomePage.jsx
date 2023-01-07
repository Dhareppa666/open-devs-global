import { Fragment } from "react"
import Checkbox from "@material-ui/core/Checkbox";
import Stack from "react-bootstrap/Stack";

export const goals = [1,2,3,4]

const HomePage = () => {
    return (
      <Fragment>
        <div style={{ align: "center", paddingTop: "80px" }}>
          <h1>My Goals</h1>
        </div>
        <div>
          <Stack direction="horizontal" spacing={2}>
            <>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </>
            <h2>Goal 1</h2>
          </Stack>
        </div>
        <div>
          <h3>Details</h3>
        </div>
      </Fragment>
    );
}

export default HomePage;