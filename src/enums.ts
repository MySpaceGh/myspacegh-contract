/**
 * Canonical domain enums for the MySpaceGH platform.
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
  | 'unavailable'
  | 'taken';

export const FACILITY_STATUSES: readonly FacilityStatus[] = [
  'draft',
  'pending',
  'active',
  'paused',
  'inactive',
  'rejected',
  'unavailable',
  'taken',
] as const;

export const FACILITY_STATUS_LABELS: Record<FacilityStatus, string> = {
  draft: 'Draft',
  pending: 'Pending Review',
  active: 'Active',
  paused: 'Paused',
  inactive: 'Inactive',
  rejected: 'Rejected',
  unavailable: 'Unavailable',
  taken: 'Taken',
};

/**
 * Statuses a facility owner is allowed to set themselves. `taken` lets an owner
 * mark a rented-out listing (and later relist by moving it back to `active`);
 * admin-set statuses (inactive/rejected/unavailable) remain owner-locked.
 */
export type OwnerSettableFacilityStatus = Extract<
  FacilityStatus,
  'active' | 'paused' | 'pending' | 'taken'
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
export type TermsAudience = 'user' | 'facility_owner' | 'service_provider';

/**
 * Backend user roles (Spatie permission roles, see database/seeders/RoleSeeder.php).
 * NOT the same as a UI "role"; these are the authoritative server-side roles.
 */
export type UserRole = 'user' | 'facility_owner' | 'service_provider' | 'admin';

export const USER_ROLES: readonly UserRole[] = [
  'user',
  'facility_owner',
  'service_provider',
  'admin',
] as const;

/**
 * Kind of lister, mirrors backend/app/Enums/ListerType.php. Both kinds hold the
 * `facility_owner` role (identical abilities); this only distinguishes them for
 * labels, terms, and the future house-owner listing cap. Seekers have `null`.
 */
export type ListerType = 'agent' | 'house_owner';

export const LISTER_TYPES: readonly ListerType[] = ['agent', 'house_owner'] as const;

export const LISTER_TYPE_LABELS: Record<ListerType, string> = {
  agent: 'Agent',
  house_owner: 'House owner',
};

/* ------------------------------------------------------------------ *
 * MySpace Rewards (points system)
 * ------------------------------------------------------------------ */

/** mirrors backend/app/Enums/PointTransactionType.php — ledger entry kinds. */
export type PointTransactionType =
  | 'earn_listing_approved'
  | 'earn_listing_quality'
  | 'earn_fast_response'
  | 'earn_booking_paid_agent'
  | 'earn_booking_paid_tenant'
  | 'earn_review_submitted'
  | 'earn_geo_report'
  | 'earn_status_taken'
  | 'earn_availability_confirmed'
  | 'reversal'
  | 'redeem_listing_boost'
  | 'redeem_profile_boost'
  | 'redeem_cashback'
  | 'expired'
  | 'admin_adjustment';

export const POINT_TRANSACTION_TYPE_LABELS: Record<PointTransactionType, string> = {
  earn_listing_approved: 'Listing approved',
  earn_listing_quality: 'Quality listing bonus',
  earn_fast_response: 'Fast response',
  earn_booking_paid_agent: 'Booking paid',
  earn_booking_paid_tenant: 'Paid safely through MySpace',
  earn_review_submitted: 'Review submitted',
  earn_geo_report: 'Map accuracy report',
  earn_status_taken: 'Marked as taken',
  earn_availability_confirmed: 'Availability confirmed',
  reversal: 'Reversal',
  redeem_listing_boost: 'Listing boost',
  redeem_profile_boost: 'Profile boost',
  redeem_cashback: 'Cashback',
  expired: 'Expired',
  admin_adjustment: 'Adjustment',
};

/** mirrors backend/app/Enums/PointRedemptionType.php */
export type PointRedemptionType = 'listing_boost' | 'profile_boost' | 'cashback';

export const POINT_REDEMPTION_TYPE_LABELS: Record<PointRedemptionType, string> = {
  listing_boost: 'Listing boost',
  profile_boost: 'Profile boost',
  cashback: 'Cashback',
};

/** mirrors backend/app/Enums/PointRedemptionStatus.php */
export type PointRedemptionStatus =
  | 'active'
  | 'fulfilled'
  | 'pending'
  | 'cancelled';

export const POINT_REDEMPTION_STATUS_LABELS: Record<PointRedemptionStatus, string> = {
  active: 'Active',
  fulfilled: 'Fulfilled',
  pending: 'Pending',
  cancelled: 'Cancelled',
};

/** mirrors backend/app/Enums/BookingReportType.php */
export type BookingReportType =
  | 'safety'
  | 'fraudulent_amount'
  | 'no_show'
  | 'not_as_described'
  | 'other';

export const BOOKING_REPORT_TYPES: readonly BookingReportType[] = [
  'safety',
  'fraudulent_amount',
  'no_show',
  'not_as_described',
  'other',
] as const;

export const BOOKING_REPORT_TYPE_LABELS: Record<BookingReportType, string> = {
  safety: 'Safety concern',
  fraudulent_amount: 'Fraudulent amount',
  no_show: 'No-show',
  not_as_described: 'Listing not as described',
  other: 'Other',
};

/**
 * mirrors backend/app/Enums/BookingReportStatus.php
 *
 * `open` and `investigating` are the *live* statuses: a booking carrying either
 * is frozen — neither party can confirm completion and it will not auto-close.
 */
export type BookingReportStatus =
  | 'open'
  | 'investigating'
  | 'resolved'
  | 'dismissed';

export const BOOKING_REPORT_STATUSES: readonly BookingReportStatus[] = [
  'open',
  'investigating',
  'resolved',
  'dismissed',
] as const;

export const BOOKING_REPORT_STATUS_LABELS: Record<BookingReportStatus, string> = {
  open: 'Open',
  investigating: 'Investigating',
  resolved: 'Resolved',
  dismissed: 'Dismissed',
};

/** The two statuses that hold a booking frozen. */
export const LIVE_BOOKING_REPORT_STATUSES: readonly BookingReportStatus[] = [
  'open',
  'investigating',
] as const;

/* ------------------------------------------------------------------ *
 * Service providers
 * ------------------------------------------------------------------ */

/**
 * mirrors backend/app/Enums/ServiceProfileStatus.php — a provider profile's
 * moderation lifecycle. Providers may set `pending` (submit), `paused` and
 * `active` (resume a self-paused profile); `inactive` and `rejected` are
 * admin-only.
 */
export type ServiceProfileStatus =
  | 'draft'
  | 'pending'
  | 'active'
  | 'paused'
  | 'inactive'
  | 'rejected';

export const SERVICE_PROFILE_STATUSES: readonly ServiceProfileStatus[] = [
  'draft',
  'pending',
  'active',
  'paused',
  'inactive',
  'rejected',
] as const;

export const SERVICE_PROFILE_STATUS_LABELS: Record<ServiceProfileStatus, string> = {
  draft: 'Draft',
  pending: 'Pending Review',
  active: 'Active',
  paused: 'Paused',
  inactive: 'Inactive',
  rejected: 'Rejected',
};

/**
 * mirrors backend/app/Enums/BookingKind.php — what a booking is for. Returned
 * as `kind` on bookings and chat threads; derived server-side from which
 * foreign key is set.
 */
export type BookingKind = 'facility' | 'service';

export const BOOKING_KINDS: readonly BookingKind[] = ['facility', 'service'] as const;
