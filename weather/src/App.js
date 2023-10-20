import logo from "./logo.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ background: "" }}>
          {/* CONTENT CONTAINER */}
          <div
            style={{
              height: "100vh",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* CARD */}
            <div
              style={{
                background: "rgb(28 52 91/ 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.2)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir="rtl"
                >
                  <Typography variant="h2">Arad</Typography>

                  <Typography style={{ marginRight: "20px" }} variant="h5">
                    10-10-2010 الاثنين
                  </Typography>
                </div>

                <hr />

                {/* DEGREE & DESCRIPTION */}
                <div>
                  {/* DEGREE*/}
                  <div>
                    <Typography variant="h1" style={{ textAlign: "right" }}>
                      38
                    </Typography>
                  </div>
                </div>
                {/* DEGREE & DESCRIPTION */}
              </div>
              {/* =================CONTENT=========== */}
            </div>
            {/* ================CARD======= */}
          </div>
          {/* CONTENT CONTAINER */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
