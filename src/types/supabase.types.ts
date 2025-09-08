export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '12.2.12 (cd3cf9e)'
  }
  public: {
    Tables: {
      admins: {
        Row: {
          account_number: string | null
          business_number: string | null
          contact: string | null
          created_at: string
          document: string | null
          id: number
          settlement_verify: boolean | null
          user_id: string
        }
        Insert: {
          account_number?: string | null
          business_number?: string | null
          contact?: string | null
          created_at?: string
          document?: string | null
          id?: number
          settlement_verify?: boolean | null
          user_id: string
        }
        Update: {
          account_number?: string | null
          business_number?: string | null
          contact?: string | null
          created_at?: string
          document?: string | null
          id?: number
          settlement_verify?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'host_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          },
        ]
      }
      spaces: {
        Row: {
          admin_id: string | null
          created_at: string
          description: string | null
          id: number
          is_active: boolean | null
          max_capacity: string | null
          name: string | null
          status: Database['public']['Enums']['space_status']
          updated_at: string | null
        }
        Insert: {
          admin_id?: string | null
          created_at?: string
          description?: string | null
          id?: number
          is_active?: boolean | null
          max_capacity?: string | null
          name?: string | null
          status?: Database['public']['Enums']['space_status']
          updated_at?: string | null
        }
        Update: {
          admin_id?: string | null
          created_at?: string
          description?: string | null
          id?: number
          is_active?: boolean | null
          max_capacity?: string | null
          name?: string | null
          status?: Database['public']['Enums']['space_status']
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          id: number
          is_admin: boolean | null
          name: string | null
          notification_preference: Database['public']['Enums']['notification_type'] | null
          phone: string | null
          provider: Database['public']['Enums']['provider_type'] | null
          role: Database['public']['Enums']['role_type']
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          is_admin?: boolean | null
          name?: string | null
          notification_preference?: Database['public']['Enums']['notification_type'] | null
          phone?: string | null
          provider?: Database['public']['Enums']['provider_type'] | null
          role?: Database['public']['Enums']['role_type']
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          is_admin?: boolean | null
          name?: string | null
          notification_preference?: Database['public']['Enums']['notification_type'] | null
          phone?: string | null
          provider?: Database['public']['Enums']['provider_type'] | null
          role?: Database['public']['Enums']['role_type']
          updated_at?: string
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
      notification_type: 'email' | 'sms' | 'none'
      provider_type: 'kakao' | 'google' | 'naver'
      role_type: 'user' | 'host' | 'admin'
      space_status: 'pending' | 'rejected' | 'approved'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      notification_type: ['email', 'sms', 'none'],
      provider_type: ['kakao', 'google', 'naver'],
      role_type: ['user', 'host', 'admin'],
      space_status: ['pending', 'rejected', 'approved'],
    },
  },
} as const
