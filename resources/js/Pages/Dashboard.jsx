import React, { useState } from 'react'
import AppWrapper from '../Components/AppWrapper'
import Layout from '../Components/Layout'
import { GoPlus } from 'react-icons/go'
import { FaFolder } from 'react-icons/fa6'
import { Box, Modal, SpeedDial, SpeedDialAction, TextField, Typography } from '@mui/material'
import { useForm, usePage } from '@inertiajs/react'
import { LoadingButton } from '@mui/lab'
import FolderListing from '../Components/Partials/FolderListing'

const Dashboard = () => {

 const { folders, folder_id} = usePage().props;

 const [createFolderModelOpen, setCreateFolderModelOpen] = useState(false);
 const {setData, post, errors, processing} = useForm({
    folder_id
 });



 const doFolderCreate = (e) => {
    e.preventDefault();

    post(route('new-folder-create'), {
        onSuccess: () => {
            setCreateFolderModelOpen(false);
        }
    });
 }

  return (
    <AppWrapper>
        <Layout>
            <div>
                <FolderListing folders={folders}/>
            </div>

            <Modal
                open={createFolderModelOpen}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={doFolderCreate} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-gray-100 shadow-lg py-8 px-10" style={{ maxWidth: "500px"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
                        Create New Folder
                    </Typography>

                    <TextField
                            label="Folder Name"
                            className='w-full'
                            disabled={processing}
                            onChange={(e) => setData('name', e.target.value)}
                            error={errors.name && true}
                            helperText={errors.name && errors.name}
                        />

                    <div className="my-2">
                        <LoadingButton variant="contained" type="submit" loading={processing}>Create</LoadingButton>
                    </div>
                </Box>
            </Modal>

            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<GoPlus size={30} />}
            >
                <SpeedDialAction
                    key="Create New Folder"
                    icon={<FaFolder color="#ff5722" />}
                    tooltipTitle="Create New Folder"
                    onClick={() => setCreateFolderModelOpen(true)}
                />
            </SpeedDial>

        </Layout>
    </AppWrapper>
  )
}

export default Dashboard
