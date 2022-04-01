/* ============================================================================
 * Copyright (c) Cloud Annotations
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";

import { createDescription } from "@paloaltonetworks/docusaurus-plugin-openapi/lib/markdown/createDescription.js";
import ReactMarkdown from "react-markdown";

import styles from "./styles.module.css";

const MarkdownUtils = require("@paloaltonetworks/docusaurus-plugin-openapi/lib/markdown/utils");

function SchemaItem({
  children: collapsibleSchemaContent,
  collapsible,
  name,
  qualifierMessage,
  required,
  schemaDescription,
  schemaName,
}) {
  const { guard } = MarkdownUtils;
  const renderRequired = guard(required, () => (
    <strong className={styles.required}> required</strong>
  ));

  const renderSchemaDescription = guard(schemaDescription, (description) => (
    <div className={styles.schemaDescription}>
      <ReactMarkdown children={createDescription(description)} />
    </div>
  ));

  const renderQualifierMessage = guard(qualifierMessage, (message) => (
    <div className={styles.schemaQualifierMessage}>
      <ReactMarkdown children={createDescription(message)} />
    </div>
  ));

  const schemaContent = (
    <div>
      <strong>{name}</strong>
      <span className={styles.schemaName}> {schemaName}</span>
      {renderRequired}
      {renderQualifierMessage}
      {renderSchemaDescription}
    </div>
  );

  return (
    <li className={styles.schemaItem}>
      {collapsible ? collapsibleSchemaContent : schemaContent}
    </li>
  );
}

export default SchemaItem;
