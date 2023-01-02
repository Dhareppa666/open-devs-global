import { useEffect, useState } from "react";
import {
  Box,
  Modal,
  CircularProgress,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { StorageService } from "../../services/storage";
import { BriefEntry } from "../../components/brief-entry";
import { FullEntry } from "../../components/full-entry";

const Homepage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  const fetchEntries = () => {
    setLoading(true);
    const allEntries = StorageService.fetchAllEntries();
    setTimeout(() => {
      setEntries(allEntries);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const captureSearchTages = (event) => {
    setTimeout(() => {
      console.log(event?.target?.value);
    }, 3000);
  }

  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h2">All Entries</Typography>
        <TextField autoFocus id="outlined-basic" label="Search Tags" variant="outlined" style={{ maxWidth: '200px' }} onChange={captureSearchTages} />

        {loading ? (
          <CircularProgress />
        ) : (
          entries.map((entry) => (
            <BriefEntry
              title={entry.title}
              tags={entry.tags}
              createdAt={entry.createdAt}
              onViewClick={() => {
                setOpenModal(true);
                setSelectedEntry(entry);
              }}
            />
          ))
        )}
      </Stack>
      <Modal open={openModal}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Box sx={{ width: "100%", maxWidth: "80vw" }}>
            {selectedEntry != null && (
              <FullEntry
                title={selectedEntry.title}
                tags={selectedEntry.tags}
                notes={selectedEntry.notes}
                createdAt={selectedEntry.createdAt}
                onClose={() => setOpenModal(false)}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export { Homepage };
