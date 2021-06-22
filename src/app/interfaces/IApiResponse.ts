export default interface ApiResponse {
  error: string | null;
  data: string[];
  isLoaded?: boolean;
}
