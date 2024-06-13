import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { Flip, ToastContainer, toast } from 'react-toastify';

const AppWrapper = ({children}) => {

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
            });
        }
    }, [flash.success]);

  return <>
    {children}
    <ToastContainer />
  </>;
}

export default AppWrapper
