import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "../common/Button";
import Loader from "../common/Loader";

async function generatePDF() {
  const invoice = document.getElementById("compare-version-container");
  var opt = {
    margin: 1,
    filename: `comparison.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "cm", format: "letter", orientation: "portrait" },
  };
  if (window && (window as any)?.html2pdf) {
    (window as any)?.html2pdf().from(invoice).set(opt).save();
  }
}

const CompareVersion = ({
  loading,
  error,
  data,
  compareFor,
}: {
  loading: boolean;
  error: string;
  data: { summary?: number; comparisons: any[]; html?: string };
  compareFor: string;
}) => {
  return (
    <div className="grid grid-rows-[25px_auto] gap-5 p-10 bg-[#fff] rounded-r-lg">
      <div className="flex font-semibold items-center text-2xl">Results</div>
      <div className="flex flex-col justify-between shadow-[0px_4px_20px_0px_#0000001a] rounded-lg p-5">
        {loading && (
          <div className="grid place-content-center min-h-[70vh]">
            {/* <CircularProgress sx={{ color: "#12D3CF" }} /> */}
            <Loader text={"Processing Documents"} />
          </div>
        )}
        <div className="max-h-[calc(100vh_-_23vh)] overflow-auto pdf-container pb-0">
          <div id="compare-version-container">
            {data?.comparisons?.length && !loading ? (
              <div>
                <div className="font-bold text-slate-400 text-lg">
                  Overall Summary
                </div>
                <div className="font-medium mb-4 ">{data?.summary}</div>
                <div className="flex flex-col gap-4">
                  {data?.comparisons?.map((e: any, index: number) => (
                    <div
                      className="font-medium"
                      key={index + e}
                    >
                      <div className="text-slate-400 text-lg font-bold">
                        {e?.heading}
                      </div>
                      <div className="flex flex-col gap-3">
                        {e?.[`${compareFor}1`] ? (
                          <div className="flex flex-col">
                            <div className="font-bold capitalize">
                              {compareFor} 1 :
                            </div>
                            <div className="pl-5 list-disc">
                              {e?.[`${compareFor}1`]}
                            </div>
                          </div>
                        ) : null}
                        {e?.[`${compareFor}2`] ? (
                          <div className="flex flex-col">
                            <div className="font-bold capitalize">
                              {compareFor} 2 :
                            </div>
                            <div className="pl-5 list-disc">
                              {e?.[`${compareFor}2`]}
                            </div>
                          </div>
                        ) : null}
                        {e?.summary ? (
                          <div className="flex flex-col">
                            <div className="font-bold">Summary : </div>
                            <div className="pl-5 list-disc">{e?.summary}</div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : !loading && !error ? (
              <div className="text-xl text-[#a5a5ac] grid place-content-center min-h-[70vh] font-light">
                Search Result
              </div>
            ) : null}
          </div>
        </div>
        {data?.comparisons?.length && !loading ? (
          <div className="flex gap-4 pt-4 sticky bottom-0 bg-[#fff]">
            <Button
              component="label"
              variant="contained"
              className="bg-[#12D3CF] hover:bg-[#12D3CF] w-[200px]"
              onClick={generatePDF}
              disabled={loading}
            >
              Download PDF
            </Button>
          </div>
        ) : null}
        {error ? <div className="text-red-500 text-xl">{error}</div> : null}
      </div>
    </div>
  );
};

export default CompareVersion;
