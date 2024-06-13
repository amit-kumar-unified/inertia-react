import { router } from '@inertiajs/react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { FaFolder } from 'react-icons/fa6'

const FolderListing = ({folders}) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell variant='th'>Name</TableCell>
                    <TableCell variant='th' align="right">Last Modified At</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {folders.map((folder) => (
                    <TableRow hover={true} key={folder.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{ cursor: "pointer"}}  onDoubleClick={() => router.get(route('dashboard', folder.id))}>
                        <TableCell component="td" scope="row">
                            <div className="flex items-center gap-3">
                                <FaFolder color={folder.color} size={30}/>
                                <span>{folder.name}</span>
                            </div>
                        </TableCell>
                        <TableCell align="right">{folder.last_modified_at}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
  </TableContainer>
  )
}

export default FolderListing
