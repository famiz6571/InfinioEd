import axios, { AxiosInstance, AxiosError } from "axios";

class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          const status = error.response.status;
          const currentPath = window.location.pathname;

          if (status === 401 && currentPath !== "/signin") {
            // Unauthorized and not on signin page
            localStorage.removeItem("user");
            window.location.href = "/signin";
          } else if (status === 404 && currentPath !== "/404") {
            // Not Found and not already on error page
            window.location.href = "/404";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string) {
    return this.axiosInstance.get<T>(url);
  }

  getById<T>(url: string, id: string | number) {
    return this.axiosInstance.get<T>(`${url}/${id}`);
  }

  post<T>(url: string, data?: any) {
    return this.axiosInstance.post<T>(url, data);
  }

  put<T>(url: string, data?: any) {
    return this.axiosInstance.put<T>(url, data);
  }

  patch<T>(url: string, data?: any) {
    return this.axiosInstance.patch<T>(url, data);
  }
}

export default new HttpService();
