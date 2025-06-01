export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id: string | null
          id_token: string | null
          oauth_token: string | null
          oauth_token_secret: string | null
          provider: string | null
          providerAccountId: string | null
          refresh_token: string | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string | null
          userId: string | null
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id?: string | null
          id_token?: string | null
          oauth_token?: string | null
          oauth_token_secret?: string | null
          provider?: string | null
          providerAccountId?: string | null
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string | null
          userId?: string | null
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id?: string | null
          id_token?: string | null
          oauth_token?: string | null
          oauth_token_secret?: string | null
          provider?: string | null
          providerAccountId?: string | null
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      admin: {
        Row: {
          business_registration_number: number
          email: string | null
        }
        Insert: {
          business_registration_number: number
          email?: string | null
        }
        Update: {
          business_registration_number?: number
          email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_email_fkey"
            columns: ["email"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: number
          message: string | null
          method: string | null
          reservation_id: number | null
          sent_at: string | null
          status: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
          method?: string | null
          reservation_id?: number | null
          sent_at?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
          method?: string | null
          reservation_id?: number | null
          sent_at?: string | null
          status?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number | null
          created_at: string
          id: number
          payment_method: string | null
          status: string | null
          transaction_id: string
          user_id: string | null
          user_ticket_id: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: number
          payment_method?: string | null
          status?: string | null
          transaction_id: string
          user_id?: string | null
          user_ticket_id?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: number
          payment_method?: string | null
          status?: string | null
          transaction_id?: string
          user_id?: string | null
          user_ticket_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_user_ticket_id_fkey"
            columns: ["user_ticket_id"]
            isOneToOne: false
            referencedRelation: "user_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      reservations: {
        Row: {
          created_at: string
          end_time: string
          id: number
          space_id: number | null
          start_time: string
          status: string | null
          updated_at: string | null
          user_id: string
          user_ticket_id: number | null
        }
        Insert: {
          created_at?: string
          end_time: string
          id?: number
          space_id?: number | null
          start_time: string
          status?: string | null
          updated_at?: string | null
          user_id: string
          user_ticket_id?: number | null
        }
        Update: {
          created_at?: string
          end_time?: string
          id?: number
          space_id?: number | null
          start_time?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
          user_ticket_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reservations_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_user_ticket_id_fkey"
            columns: ["user_ticket_id"]
            isOneToOne: false
            referencedRelation: "user_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          expires: string | null
          id: string | null
          sessionToken: string | null
          userId: string | null
        }
        Insert: {
          expires?: string | null
          id?: string | null
          sessionToken?: string | null
          userId?: string | null
        }
        Update: {
          expires?: string | null
          id?: string | null
          sessionToken?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      space_availability: {
        Row: {
          day_of_week: number | null
          end_time: string
          id: number
          is_available: boolean | null
          space_id: number | null
          start_time: string
        }
        Insert: {
          day_of_week?: number | null
          end_time: string
          id?: number
          is_available?: boolean | null
          space_id?: number | null
          start_time: string
        }
        Update: {
          day_of_week?: number | null
          end_time?: string
          id?: number
          is_available?: boolean | null
          space_id?: number | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "space_availability_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces: {
        Row: {
          address: string | null
          business_registration_number: number | null
          created_at: string | null
          description: string | null
          id: number
          is_active: boolean | null
          max_capacity: number | null
          name: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          business_registration_number?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          max_capacity?: number | null
          name?: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          business_registration_number?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          max_capacity?: number | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_business_registration_number_fkey"
            columns: ["business_registration_number"]
            isOneToOne: false
            referencedRelation: "admin"
            referencedColumns: ["business_registration_number"]
          },
        ]
      }
      tickets: {
        Row: {
          created_at: string
          id: number
          name: string
          price: number
          type: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          price: number
          type?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          price?: number
          type?: string | null
          value?: string | null
        }
        Relationships: []
      }
      user_tickets: {
        Row: {
          created_at: string
          expires_at: string | null
          id: number
          payment_status: string | null
          purchased_at: string | null
          remaining_value: number
          ticket_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: number
          payment_status?: string | null
          purchased_at?: string | null
          remaining_value: number
          ticket_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: number
          payment_status?: string | null
          purchased_at?: string | null
          remaining_value?: number
          ticket_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_tickets_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          emailVerified: string | null
          id: number
          name: string | null
          notification_preference: string | null
          password: string | null
          phone: string | null
          profile_image: string | null
          provider: string | null
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          emailVerified?: string | null
          id?: number
          name?: string | null
          notification_preference?: string | null
          password?: string | null
          phone?: string | null
          profile_image?: string | null
          provider?: string | null
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          emailVerified?: string | null
          id?: number
          name?: string | null
          notification_preference?: string | null
          password?: string | null
          phone?: string | null
          profile_image?: string | null
          provider?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      roles: "USER" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      roles: ["USER", "ADMIN"],
    },
  },
} as const
