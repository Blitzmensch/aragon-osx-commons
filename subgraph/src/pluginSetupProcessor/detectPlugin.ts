import {Address} from '@graphprotocol/graph-ts';

/**
 * @notice Check if the plugin from an event matches the expected plugin repository
 * @param eventPluginRepo The address of the event's plugin repository
 * @param expectedPluginRepo The address of the expected plugin repository
 * @return A boolean indicating if the event plugin repository matches the expected one
 */
export function detectPlugin(
  eventPluginRepo: Address,
  expectedPluginRepo: Address
): boolean {
  return eventPluginRepo == expectedPluginRepo;
}
