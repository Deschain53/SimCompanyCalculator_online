import {useState} from 'react';

export const useInformation = () => {
    
    const [informacion, setInformacion] = useState({
        fase: 1,
        edificio: 1,
        PVM: 3,
        admin: 0,
        bonificacion: 0,
        transporte: 0,
        calidad: 0
      });
    
      const {calidad,fase} = informacion;
    
      const updateFromFormInfo = (newInformation = {}) => {
        setInformacion({...newInformation,calidad,fase});
      }
    
      const updateQuality = (quality = 0) => {
        setInformacion({...informacion, calidad: quality});
      }

      const updateFase = (fase =0 ) => {
        setInformacion({...informacion, fase});
      }


    return {
        informacion,
        updateFromFormInfo,
        updateQuality,
        updateFase
    };
}
