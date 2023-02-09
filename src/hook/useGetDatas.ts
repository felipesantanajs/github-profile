import {create} from 'zustand'

interface PrincipalDatasType{
  name:string;
  avatar_url:string;
  public_repos: number;
  following:number;
  followers:number;
  bio:string;
  login:string;
  location:string;
  email:string;
  twitter_username:string;
}

interface DatasReposType{
  id:number;
  name: string;
  stargazers_count:number;
  html_url:string;
}
interface useGetDatasProps{
  getDatasApi:PrincipalDatasType;
  getDatasReposApi: DatasReposType[];
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