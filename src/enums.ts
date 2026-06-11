/**
 * Canonical domain enums for the MySpaceGh platform.
 *
 * SOURCE OF TRUTH: backend/app/Enums/*.php (Laravel). These string-literal
 * unions MUST mirror those PHP enums exactly. When the backend changes an enum,
 * update this file in the same change and bump consumers (web + mobile).
 *
 * Do NOT add UI-only concepts here (e.g. mobile's `Role = seeker | agent`).
 * This package is backend-shaped: only what the API actually emits.
 */

/** mirrors backend/app/Enums/BookingStatus.php */
export type BookingStatus =
  | 'pending'
  | 'pending_agent'
  | 'confirmed'
  | 'paid'
  | 'completed'
  | 'cancelled';

export const BOOKING_STATUSES: readonly BookingStatus[] = [
  'pending',
  'pending_agent',
  'confirmed',
  'paid',
  'completed',
  'cancelled',
] as const;

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Pending',
  pending_agent: 'Pending Agent Response',
  confirmed: 'Confirmed',
  paid: 'Paid',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

/** mirrors backend/app/Enums/FacilityStatus.php */
export type FacilityStatus =
  | 'draft'
  | 'pending'
  | 'active'
  | 'paused'
  | 'inactive'
  | 'rejected'
  | 'unavailable';

export const FACILITY_STATUSES: readonly FacilityStatus[] = [
  'draft',
  'pending',
  'active',
  'paused',
  'inactive',
  'rejected',
  'unavailable',
] as const;

export const FACILITY_STATUS_LABELS: Record<FacilityStatus, string> = {
  draft: 'Draft',
  pending: 'Pending Review',
  active: 'Active',
  paused: 'Paused',
  inactive: 'Inactive',
  rejected: 'Rejected',
  unavailable: 'Unavailable',
};

/** Statuses a facility owner is allowed to set themselves. */
export type OwnerSettableFacilityStatus = Extract<
  FacilityStatus,
  'active' | 'paused' | 'pending'
>;

/** mirrors backend/app/Enums/PaymentDuration.php */
export type PaymentDuration =
  | 'hourly'
  | 'nightly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'one-time';

export const PAYMENT_DURATIONS: readonly PaymentDuration[] = [
  'hourly',
  'nightly',
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'one-time',
] as const;

/** mirrors backend/app/Enums/FacilityType.php */
export type FacilityTypeSlug =
  | 'house'
  | 'apartment'
  | 'store'
  | 'office'
  | 'warehouse'
  | 'event'
  | 'other';

/** mirrors backend/app/Enums/TransactionStatus.php */
export type TransactionStatus = 'pending' | 'successful' | 'failed';

/** mirrors backend/app/Enums/PayoutStatus.php */
export type PayoutStatus =
  | 'pending'
  | 'processing'
  | 'successful'
  | 'failed'
  | 'cancelled';

/** mirrors backend/app/Enums/CancellationCategory.php */
export type CancellationCategory =
  | 'client_cancelled'
  | 'agent_declined'
  | 'agent_timeout'
  | 'system';

/** mirrors backend/app/Enums/TermsStatus.php */
export type TermsStatus = 'draft' | 'active' | 'archived';

/** mirrors backend/app/Enums/TermsAudience.php */
export type TermsAudience = 'user' | 'facility_owner';

/**
 * Backend user roles (Spatie permission roles, see database/seeders/RoleSeeder.php).
 * NOT the same as a UI "role"; these are the authoritative server-side roles.
 */
export type UserRole = 'user' | 'facility_owner' | 'admin';

export const USER_ROLES: readonly UserRole[] = [
  'user',
  'facility_owner',
  'admin',
] as const;
