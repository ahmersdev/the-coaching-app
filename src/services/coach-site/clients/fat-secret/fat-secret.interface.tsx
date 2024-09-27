export interface IOAuthParams {
  oauth_consumer_key: string;
  oauth_nonce: string;
  oauth_timestamp: string;
  oauth_signature_method: string;
  oauth_signature?: string;
}

export interface IFoodItem {
  food_id: string;
  food_name: string;
  food_description: string;
  food_type: string;
}

export interface IFoodSearchResponse {
  foods: {
    food: IFoodItem[];
  };
}
