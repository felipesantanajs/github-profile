import {create} from 'zustand'

interface PrincipalDatasType{
  id?:number;
  name:string;
  avatar_url:string;
  public_repos: number;
  following:number;
  followers:number;
  bio:string;
  login:string;
  location:string;
  email?:string;
  twitter_username?:string;
  blog?:string;
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
  getDatasApi: {name:"", avatar_url:"", bio:"",email:"",followers:0,following:0,public_repos:0,location:"",login:"",twitter_username:""},
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