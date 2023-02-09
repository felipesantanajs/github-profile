import {create} from 'zustand'

interface useGetDatasProps{
  getDatasApi:{};
  getDatasReposApi: [];
  setGetDatasApi: (datas:any) => void;
  setGetDatasReposApi: (datas:any) => void;
}
const useGetDatas = create<useGetDatasProps>((set) =>({
  getDatasApi: {},
  getDatasReposApi: [],
  
  setGetDatasApi: (values) =>{
    set((state) => ({
      getDatasApi: values
    }))
  },

  setGetDatasReposApi: (values) =>{
    set((state) => ({
      getDatasReposApi: values
    }))
  }
}))

export default useGetDatas